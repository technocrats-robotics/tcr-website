import React from 'react'
import "./CSS/Body.css"

function MembersPanel() {
    return (
        <div class="admin__membersPanel">
            <table class="ui celled definition table">
                <thead class="full-width">
                    <tr>
                        <th>Count</th>
                        <th>Name</th>
                        <th>Y.O.J</th>
                        <th>Department</th>
                        <th>User Name @tcr.in</th>
                        <th>Registered Email Id</th>
                        <th>Role</th>
                        <th>Blog Access</th>
                        <th>Profile Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1.</td>
                        <td>Rahul Bera</td>
                        <td>2018</td>
                        <td>Programming</td>
                        <td>rahul.bera2018@tcr.in</td>
                        <td>rahul.bera2018@gmail.com</td>
                        <td>Senior</td>
                        <td class="collapsing">
                            <div class="ui fitted slider checkbox">
                                <input type="checkbox" /> <label></label>
                            </div>
                        </td>
                        <td class="collapsing">
                            <div class="ui fitted slider checkbox">
                                <input type="checkbox" /> <label></label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Shivansh Goel</td>
                        <td>2019</td>
                        <td>Programming</td>
                        <td>shivansh.goel2019@tcr.in</td>
                        <td>shivanshgoel21@gmail.com</td>
                        <td>Junior</td>
                        <td class="collapsing">
                            <div class="ui fitted slider checkbox">
                                <input type="checkbox" /> <label></label>
                            </div>
                        </td>
                        <td class="collapsing">
                            <div class="ui fitted slider checkbox">
                                <input type="checkbox" /> <label></label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>Karan Yuvraj Singh</td>
                        <td>2019</td>
                        <td>Programming</td>
                        <td>kys.2019@tcr.in</td>
                        <td>karanysingh@gmail.com</td>
                        <td>Junior</td>
                        <td class="collapsing">
                            <div class="ui fitted slider checkbox">
                                <input type="checkbox" /> <label></label>
                            </div>
                        </td>
                        <td class="collapsing">
                            <div class="ui fitted slider checkbox">
                                <input type="checkbox" /> <label></label>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>4.</td>
                        <td>Aayush Kumar</td>
                        <td>2017</td>
                        <td>Electrical</td>
                        <td>aayush.kumar2017@tcr.in</td>
                        <td>aayushkumar@gmail.com</td>
                        <td>Mentor</td>
                        <td class="collapsing">
                            <div class="ui fitted slider checkbox">
                                <input type="checkbox" /> <label></label>
                            </div>
                        </td>
                        <td class="collapsing">
                            <div class="ui fitted slider checkbox">
                                <input type="checkbox" /> <label></label>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>5.</td>
                        <td>Dwij Sheth</td>
                        <td>2016</td>
                        <td>Electrical</td>
                        <td>dwij.sheth2016@tcr.in</td>
                        <td>dwijsheth@gmail.com</td>
                        <td>Alumni</td>
                        <td class="collapsing">
                            <div class="ui fitted slider checkbox">
                                <input type="checkbox" /> <label></label>
                            </div>
                        </td>
                        <td class="collapsing">
                        <div class="ui fitted slider checkbox">
                            <input type="checkbox" /> <label></label>
                        </div>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default MembersPanel
