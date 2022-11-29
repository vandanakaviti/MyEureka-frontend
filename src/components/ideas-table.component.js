import React, { Component } from 'react'
import IdeaService from '../services/idea.service'

import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { MdOutlinePlaylistAddCheck } from "react-icons/md";
import AddFavourite from './add-favourite.component';


class IdeaTableComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ideas: []
        }
    }
    viewIdea(id){
        this.props.history.push(`/viewIdea/${id}`);
    }

    componentDidMount(){
        IdeaService.getIdeas().then((res) => {
            this.setState({ ideas: res.data});
        });

    }

    render() {
        return (
            <div>
                <h2 className="text-center display-3">IDEAS</h2>
                 <div class="d-grid gap-2 d-md-flex justify-content-md-end" style={{"paddingBottom":"10px"}}>
                    <a href="/addIdea" class="btn btn-outline-success me-md-2" style={{"fontSize":"small", "fontWeight":"bold", "display":"inline-block", "height":"65px"}} >
                        <MdOutlinePlaylistAdd size={"30px"} />
                        <div>Add Idea</div>
                    </a>
                    <a href="/addIdea" class="btn btn-outline-warning" style={{"fontSize":"small", "fontWeight":"bold", "display":"inline-block", "height":"65px"}} >
                        <MdOutlinePlaylistAddCheck size={"30px"} />
                        <div>My Ideas</div>
                    </a>
                </div>
                 <div className = "row">
                        <table style={{"textAlign" : "center"}} className = "table table-striped table-bordered">

                            <thead >
                                <tr>
                                    <th> Idea</th>
                                    <th> Response</th>
                                    <th style={{"width" : "80px"}}> Created by</th>
                                    <th style={{"width" : "100px"}}> Created date</th>
                                    <th style={{"width" : "100px"}}> Add favourite</th>
                                    <th> Rewards</th>
                                    <th> Status</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.ideas.map(
                                        idea => 
                                        <tr key = {idea.id} >
                                            {/* <td> {idea.id}</td> */}
                                             <td style={{"textAlign" : "left"}}>
                                                <h5><a href="/viewIdea/{idea.id}">{idea.ideaTitle}</a></h5>
                                                <p style={{"width" : "300px",  "height" : "1.2em", "overflow":"hidden",
                                                "text-overflow": "ellipsis", "white-space": "nowrap", "fontSize":"12px"}}> {idea.ideaDescription}</p>
                                                
                                             </td>   
                                             <td>
                                                <span style={{"display":"inline-block"}}>
                                                    <AiOutlineLike size={"25px"} color={"DodgerBlue"} />
                                                    <div>{idea.likesCount}</div>
                                                </span>
                                                <span style={{"display":"inline-block", "paddingInline":"30px"}}>
                                                    <AiOutlineComment size={"25px"} color={"Tomato"} />
                                                    <div>{idea.commentsCount}</div>
                                                </span>
                                             </td>
                                             <td> {idea.fname + " " + idea.lname}</td>
                                             <td> {idea.createdDate}</td>
                                             <td> <AddFavourite /></td>
                                             <td> </td>
                                             <td> {idea.ideaStatus}</td>
                                             
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default IdeaTableComponent;