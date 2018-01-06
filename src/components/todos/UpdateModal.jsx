import React, {Component} from 'react';
import { 
  Button, Modal, ModalHeader, ModalBody, 
  ModalFooter, Form, Input, FormGroup
} from 'reactstrap';


class UpdateModal extends Component {
  constructor(props) {
    super(props);
    this.state = {body: '', _id: null, modal: false}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
  }


  handleChange(e) {
    this.setState({body: e.target.value})
  }


  handleSubmit(e) {
    e.preventDefault();
    let {body, _id} = this.state;

    if(body.length) {
      this.props.onSubmit({body}, _id);
      this.setState({body: ''});
      this.toggle();
    }
  }


  toggle(todo) {
    if(todo) {
      this.setState({
        modal: !this.state.modal, 
        body: todo.body,
        _id: todo._id
      });
    } else {
      this.setState({modal: !this.state.modal})
    }
  }



  render() {
    return (
      <div>
        <Modal 
          isOpen={this.state.modal} 
          toggle={this.toggle} 
          className={this.props.className}>
          <ModalHeader toggle={this.toggle}>
            Update todo
          </ModalHeader>

          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Input 
                name="body" 
                type="textarea"
                rows={6}
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

export default UpdateModal;