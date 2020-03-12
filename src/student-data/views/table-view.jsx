import React from 'react';

 function TableView({students,handleEdit,handleDelete}){
		return (
			<div  className="my-4">
				<table className="table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Department</th>
							<th>ID</th>
							<th>Actiom</th>
						</tr>
					</thead>
					<tbody>
						{students.map(student =>(
						<tr key={student.id}>
							<th className='text-uppercase'>{student.name}</th>
							<td className='text-uppercase font-weight-light'> - {student.dept} - </td>
							<td className='text-lowercase font-weight-light'>{student.id}</td>
							<td>
								<div  className='ml-auto'>
									<button type='button' className='btn btn-sm btn-warning' onClick={()=> handleEdit(student.id)}>Edit</button>
									<button type='button' className='btn btn-sm btn-danger ml-1' onClick={()=> handleDelete(student.id)} >Delete</button>
								</div>
							</td>
						</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
export default TableView;