import React from "react";
import { useEffect, useState } from "react";
import {
  Button,
  Header,
  Modal,
  Table,
  Dropdown,
  Popup,
} from "semantic-ui-react";
import "./CSS/Body.css";

//database (firestore) from services
import { admin_db } from "../services/google-firebase/setup";
import Member from "../services/google-firebase/models/members/member";
import Role from "../services/google-firebase/models/members/role";
import Department from "../services/google-firebase/models/members/department";
import { Warning, Success } from "../components";


function Memberdivel() {
  // State variables
  const [details, setDetails] = useState([]);

  //messages
  const [success, showSuccess] = Success();
  const [warning, showWarning] = Warning();

  useEffect(() => {
    document.title = "Admin Panel | Manage Members";

    admin_db
      .collection(Member.collectionName)
      .orderBy("yearOfJoining", "desc")
      .orderBy("name")
      .onSnapshot((snapshot) => {
        setDetails(
          snapshot.docs.map((doc) => {
            return doc;
          })
        );
      });
  }, []);

  /**
   * Generates a table for Role modification
   */
  var YearlyRolesTable = (props) => {
    let rows = [];
    let yearly_roles = props.yearly_roles;
    let roleOptions = [];
    Object.values(Role).forEach((role) => {
      roleOptions.push({
        key: role,
        text: role,
        value: role,
      });
    });
    Object.keys(yearly_roles).forEach((year) => {
      rows.push(
        <Table.Row key={year}>
          <Table.Cell>{year}</Table.Cell>
          <Table.Cell>
            <Dropdown
              options={roleOptions}
              placeholder="Select Role"
              defaultValue={yearly_roles[year]}
              onChange={(e, data) => {
                // console.log(data.value); // Debugging
                // Modify role in database
                let selectedMember = new Member(props.mid);
                selectedMember
                  .updateMemberDetail("roles." + year, data.value)
                  .then((status) => {
                    // TODO: Remove console logs & replace with messages
                    if (status) showSuccess("Role Modified");
                    else showWarning("Something went wrong!");
                  });
              }}
            />
          </Table.Cell>
        </Table.Row>
      );
    });

    // Generate the table
    return (
      <div>
        {success}
        {warning}
        <Table unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Team Year</Table.HeaderCell>
              <Table.HeaderCell>Role</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{rows}</Table.Body>
        </Table>
      </div>
    );
  };

  var CopyUID = (props) => {
    return (
      <Popup
        trigger={
          <Button
            circular
            basic
            icon="copy outline"
            onClick={() => {
              navigator.permissions
                .query({ name: "clipboard-write" })
                .then((result) => {
                  if (result.state === "granted" || result.state === "prompt") {
                    navigator.clipboard.writeText(props.uid).then(
                      function () {
                        /* clipboard successfully set */
                      },
                      function () {
                        alert("Couldn't copy!");
                      }
                    );
                  }
                });
            }}
          />
        }
        content="Click to copy Member UID"
        hideOnScroll
      />
    );
  };

  /**
   * Generates a table for Department modification
   */
  var DepartmentTable = (props) => {
    let rows = [];
    let departmentOptions = [];

    Object.values(Department).forEach((department) => {
      departmentOptions.push({
        key: department,
        text: department,
        value: department,
      });
    });

    rows.push(
      <Table.Row key={props.department}>
        <Table.Cell>
          <Dropdown
            options={departmentOptions}
            placeholder="Select Department"
            defaultValue={props.department}
            onChange={(e, data) => {
              // console.log(data.value); // Debugging
              // Modify department in database
              let selectedMember = new Member(props.mid);
              selectedMember
                .updateMemberDetail("branch", data.value)
                .then((status) => {
                  if (status) showSuccess("Department Modified");
                  else showWarning("Something went wrong!");
                });
            }}
          />
        </Table.Cell>
      </Table.Row>
    );

    // Generate the table
    return (
      <div>
        {success}
        {warning}
        <Table unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Department</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{rows}</Table.Body>
        </Table>
      </div>
    );
  };

  let downloadBackup = () => {
    // JSON string as array of objects

    let jsonDetails = "[";

    details.forEach((detail) => {
      jsonDetails += JSON.stringify(detail.data(), null, "\t") + ",";
    });

    // remove last ','
    jsonDetails = jsonDetails.slice(0, -1);

    jsonDetails += "]";

    // download
    let dataStr =
      "data:text/json;charset=utf-8," + encodeURIComponent(jsonDetails);

    let date = new Date().toLocaleDateString();

    let downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute(
      "download",
      "Technocrats_backup_" + date + ".json"
    );
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  let uploadBackup = () => {
    function handleFileLoad(event) {
      let details = event.target.result;

      try {
        let detailsJSON = JSON.parse(details);
        console.log(detailsJSON);
      } catch (err) {
        console.log(err);
      }
    }

    function handleFileSelect(event) {
      const reader = new FileReader();
      reader.onload = handleFileLoad;
      reader.readAsText(event.target.files[0]);
    }

    document
      .getElementById("uploadBackup")
      .addEventListener("change", handleFileSelect, false);

    document.getElementById("uploadBackup").click();
  };

  return (
    <div className="admin__memberdivel">
      <table className="ui definition table" key="table">
        <thead className="full-width cardMainHead" key="thead">
          <tr>
            <th>Count</th>
            <th>
              Name
              <div
                className="ui small basic icon buttons"
                style={{ margin: "5px" }}
              >
                <input
                  id="uploadBackup"
                  type="file"
                  style={{ display: "none" }}
                />
                <button
                  className="ui button"
                  data-tooltip="Upload Backup"
                  onClick={uploadBackup}
                >
                  <i className="upload icon"></i>
                </button>
                <button
                  className="ui button"
                  data-tooltip="Download Backup"
                  onClick={downloadBackup}
                >
                  <i className="download icon"></i>
                </button>
              </div>{" "}
            </th>
            <th>Y.O.J</th>
            <th>Department</th>
            <th>User Name @tcr.in</th>
            <th>Registered Email Id</th>
            <th>Current Role</th>
            <th>Blog Access</th>
            <th>Profile Status</th>
          </tr>
        </thead>
        <tbody key="tbody">
          {details.map((detail, index) => {
            let member = detail.data();
            // Get only of the current role of the member
            let currentRole = Member.getCurrentRole(member.roles)[1];
            return (
              <tr className="cardMainBody" key={index + 1}>
                <td className="cardCount">
                  <div className="captions">Sno</div>
                  <div className="captionContent">{index + 1}</div>
                </td>
                <td className="cardData">
                  <div className="captions">Name</div>
                  <div className="captionContent">
                    <CopyUID uid={detail.id} />
                    {member.name}
                  </div>
                </td>
                <td className="cardData">
                  <div className="captions">Year Of Joining</div>
                  <div className="captionContent">{member.yearOfJoining}</div>
                </td>

                <td>
                  <div className="captions">Branch</div>
                  <div className="captionContent">
                    <Modal
                      className="adminPanelModal"
                      closeIcon
                      trigger={<Button basic circular icon="edit outline" />}
                      dimmer="blurring"
                    >
                      <Header
                        icon="universal access"
                        content="Modify Department"
                      />
                      <Modal.Content>
                        <DepartmentTable
                          department={member.branch}
                          mid={detail.id}
                        />
                      </Modal.Content>
                    </Modal>
                    {member.branch}
                  </div>
                </td>

                <td className="cardData">
                  <div className="captions">Department</div>
                  <div className="captionContent">{member.username}</div>
                </td>
                <td className="cardData">
                  <div className="captions">Email</div>
                  <div className="captionContent">{member.registeredEmail}</div>
                </td>
                <td>
                  <div className="captions">Role</div>
                  <div className="captionContent">
                    <Modal
                      className="adminPanelModal"
                      closeIcon
                      trigger={<Button basic circular icon="edit outline" />}
                      dimmer="blurring"
                    >
                      <Header
                        icon="universal access"
                        content="Modify Yearly Roles"
                      />
                      <Modal.Content>
                        <YearlyRolesTable
                          yearly_roles={member.roles}
                          mid={detail.id}
                        />
                      </Modal.Content>
                    </Modal>
                    {currentRole}
                  </div>
                </td>
                <td className="collapsing">
                  <div className="captions">Blog Access</div>
                  <div className="ui fitted slider checkbox">
                    <input
                      type="checkbox"
                      checked={member.blogAccess ? true : false}
                      onChange={() => {
                        let selectedMember = new Member(detail.id);
                        selectedMember.updateMemberDetail(
                          "blogAccess",
                          !member.blogAccess
                        );
                      }}
                    />{" "}
                    <label></label>
                  </div>
                </td>
                <td className="collapsing">
                  <div className="captions">Profile Status</div>
                  <div className="ui fitted slider checkbox">
                    <input
                      type="checkbox"
                      checked={member.isActive ? true : false}
                      onChange={() => {
                        let selectedMember = new Member(detail.id);
                        selectedMember.updateMemberDetail(
                          "isActive",
                          !member.isActive
                        );
                      }}
                    />{" "}
                    <label></label>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Memberdivel;

/**
 * References:
 * https://stackoverflow.com/questions/13751166/javascript-uncaught-referenceerror-keys-is-not-defined
 * Interact with Clipboard: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
 *
 * Download JSON: https://stackoverflow.com/questions/19721439/download-json-object-as-a-file-from-browser
 * Upload File: https://stackoverflow.com/questions/16505333/get-the-data-of-uploaded-file-in-javascript
 */
