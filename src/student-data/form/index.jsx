import React from 'react';
import {Formik, Field,Form} from 'formik'


// render sam jsx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx 
class StudentForm extends React.Component{

	render(){
		const{ editable, editableStudent } = this.props;

		const initialValues = {name:'',dept:''};
		if (editable) {
			initialValues.name=editableStudent.name
			initialValues.dept=editableStudent.dept
		};

		return (  
				<div>
					{editable ? (
						<h3 className='text-info text-center font-weight-normal'>Update Student Informetion</h3>
						):(
						<h3 className='text-info text-center font-weight-normal'> Create New Student Data</h3>
					)}

					<Formik 
						initialValues={initialValues}
						enableReinitialize={true}
						onSubmit={(values,formikBag)=>{
							if (editable) {
								this.props.updateStudent(values,editableStudent.id);
							} else {
								this.props.createStudent(values);
								formikBag.resetForm();
							}
						}}

					>
						{() => (
							<Form>
								<div className="row">
									<div className="col">
										<Field
											name='name'
											placeholder='Enter Name'
											className='form-control mt-2'
										/>
									</div>
									<div className="col">
										<Field as='select' name='dept' className='form-control mt-2' >
											<option>Select Dept</option>
											<option value='CSE'>CSE</option>
											<option value='EEE'>EEE</option>
											<option value='IT'>IT</option>
										</Field>
									</div>
								</div>
								<div className='text-center'>
									<button type='submit' className='btn btn-outline-dark btn-sm mt-2 btn-block'>{editable ? 'Update':'Create'}</button>
									<button type='reset' onClick={this.props.hendleReset} className='btn btn-outline-danger btn-sm mt-1 btn-block'>Reset</button>
								</div>

							</Form>
						)}
					</Formik>

				</div>
			);
		};
	};
export default StudentForm;