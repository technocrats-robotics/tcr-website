import React, { Component } from 'react';
import { Grid, Segment, Header,Image } from 'semantic-ui-react';

export default class ImageMat extends Component {
  render() {
    return(
        <div style={{textAlign:'center'}}>
            <Grid>
                <Grid.Row style={{transform:'scale(2.0)',marginLeft:'-50px',marginTop:'150px'}} centered columns={16}>
                    <Grid.Column stretched>
                        {/* <Image className='matAsset1' size='medium' src="https://thumbs.dreamstime.com/b/isometric-flat-d-isolated-vector-rover-standing-mars-concept-94755906.jpg"></Image>         */}
                        <div className='matAsset1' ></div>

                        <div className='matAsset2'></div> 
                    </Grid.Column>
                    <Grid.Column stretched>
                        <div className='matAsset3'></div>
                        <div className='matAsset4'></div> 

                        {/* <Image className='matAsset4' size='medium' src='https://thumbs.dreamstime.com/b/isometric-flat-d-isolated-vector-rover-standing-mars-concept-94755906.jpg'></Image> */} */}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
    }
}