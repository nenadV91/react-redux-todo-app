import React, {Component} from 'react';
import { 
  Button, Modal, ModalHeader, ModalBody, 
  ModalFooter, Form, Input, FormGroup
} from 'reactstrap';


class CreateModal extends Component {
  constructor(props) {
    super(props);
    this.state = {body: '', modal: false}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
  }


  handleChange(e) {
    this.setState({body: e.target.value})
  }


  handleSubmit(e) {
    e.preventDefault();
    let {body} = this.state;
    if(body.length) {
      this.props.onSubmit({body});
      this.setState({body: ''});
      this.toggle();
    }
  }


  toggle(todo = null) {
    this.setState({modal: !this.state.modal});
  }



  render() {
    return (
      <div>
        <Button id="create-todo-btn" color="dark" onClick={this.toggle}>
          <i className="fa fa-plus" aria-hidden="true"></i>
        </Button>

        <Modal 
          isOpen={this.state.modal} 
          toggle={this.toggle} 
          className={this.props.className}>
          <ModalHeader toggle={this.toggle}>
            Create new todo
          </ModalHeader>

          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Input 
                rows={6}
                name="body" 
                type="textarea"
                value={this.state.body}
                onChange={this.handleChange}
                placeholder="What do you need to do?" />
              </FormGroup>
              <Button color="dark">Submit</Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>

    )
  }
}

export default CreateModal;