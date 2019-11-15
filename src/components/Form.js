import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import SaveIcon from '@material-ui/icons/Save';






export default class Create extends Component {
    render() {
        const form_style = {
            display: "flex",
            flexDirection: "column",
            textAlign: "right"
        }
        return (
            <div>
                <form style={form_style} onSubmit={this.props.handlingSubmit}>

                    <TextField
                        name='title'
                        value={this.props.title}
                        onChange={this.props.handlingChange}
                        id="standard-basic"

                        label="제목쓰세용"
                        margin="normal"
                    />
                    <TextField
                        label="Write"
                        Write
                        rows="4"
                        margin="normal"
                        variant="filled"
                        name='content'
                        value={this.props.content}
                        onChange={this.props.handlingChange}
                    />

                    <Button onClick={this.props.handlingSubmit}
                        variant="contained"
                        color="primary"
                        size="large"
                        startIcon={<SaveIcon />}
                    >
                        Save
                    </Button>
                </form>
            </div>
        )
    }
}