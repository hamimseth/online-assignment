import React from 'react';
import './CourseList.css';
import { Button } from 'react-bootstrap';


const CourseList = (props) => {
    const { name, img, enroll, instructor, courseFee } = props.passCourse;
    return (
        <div className="course mb-3 p-3">
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <div className="text-center course-head">
                        <img className="img-fluid img-thumbnail" src={img} alt="course img" />
                        <h4 className="course-name mt-3">{name}</h4>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="course-details mt-3">
                        <h5>Instractor : {instructor}</h5> <br/>
                        <h5> Total Enrolled -- {enroll}  </h5>
                        <h5>Course Fee : {courseFee} Tk</h5> <br />
                        <Button className="enroll-button" onClick={() => props.enrollHandler(props.passCourse)}> Enroll Now</Button>
                    </div>
                </div>
            </div> <br />
        </div>
    );
};

export default CourseList;