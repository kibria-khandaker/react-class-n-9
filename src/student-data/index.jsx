import React from 'react';
import './index.css';
import shortid from 'short-id';

import StudentForm from './form';
import ViewStudents from './views';
import students from './data';


// render sam jsx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
class StudentApp extends React.Component{

	state = {
		students:students, // it is for damy data or use it [], 
		editable:false,
		selectedStudent:null
	};
	 
	handleEdit=id=>{
		this.setState({
			editable:true,
			selectedStudent:id
		});
	};
	handleDelete=id=>{
		const students = this.state.students.filter(
			student => student.id !== id
		);
		this.setState({students});

		if (this.state.selectedStudent === id) {
			this.setState({
				editable:false,
				selectedStudent:null
			});
		};
	};

	createStudent=student=>{
		student.id = shortid.generate();
		const students = [student, ...this.state.students];
		this.setState({students});
	};
	updateStudent=({name,dept},id)=>{
		const{students}=this.state;
		const student = students.find(student => student.id ===id);
		student.name = name;
		student.dept = dept;

		this.setState({students});
	};

	hendleReset=()=>{
		this.setState({
			editable:false,
			selectedStudent:null
		});
	};

	render(){

		const {students,editable,selectedStudent}=this.state

		let editableStudent = null
		if (editable) {
			editableStudent = students.find(
				student => student.id === selectedStudent
			);
		};
		// console.log(editableStudent);
		return (  
				<div>
					<p className='text-center mt-3'>Students Information Collection Application Form</p>				
					<div className='pb-3'>
						<StudentForm 
							editable={editable} 
							editableStudent={editableStudent} 
							createStudent={this.createStudent}
							updateStudent={this.updateStudent}
							hendleReset={this.hendleReset}
						/>
					</div>
					<div className='mt-4'>
						<ViewStudents 
							students={students} 
							handleEdit={this.handleEdit}
							handleDelete={this.handleDelete}
						/>
					</div>

				</div>
			);
		}
	}
export default StudentApp;