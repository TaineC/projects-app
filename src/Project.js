import React, {Component} from 'react';

var serverUrl = 'http://10.2.24.38:3001/';

class  Project extends Component {

	handleTrashClick = () => {
		var {deleteProjects,id} = this.props;

		deleteProjects(id);
	}
	handleEditClick = () => {
		var {setActiveView, setProjectToUpdate, id} = this.props;

		setProjectToUpdate(id)
		setActiveView('edit-project')

	}

  	render(){

	  	var {name,description,photo,user_id,user} = this.props

	    return (
	      <div className="card project">
	        <img className="card-img-top" src={serverUrl+photo} alt="Card image cap" />
	        <div className="card-body">
	          <h5 className="card-title">{name}</h5>
	          <p className="card-text">{description}</p>
	          <p>
	            <i className="fas fa-heart"></i>
				{(user && (user.id == user_id))? (
					<>
					<i onClick={this.handleEditClick} className="fas fa-edit"></i>
	            	<i onClick={this.handleTrashClick} className="fas fa-trash"></i>
	            	</>
				) : null}
	            

	          </p>
	        </div>
	      </div>
	    );
  	}
}

export default Project;
