import React, { useEffect, useState } from 'react';


export default function CreateCampaign(props){

    // const campaignID = props.match.params.id;
    // let [campaign, setCampaign] = React.useState([])

    // make a function 
    // async function createCampaign(id) {
    //     try {
    //       const response = await axios.post(`/api/campaigns/create`, {id});
    //       console.log(response)
    //       const data = response.data;
    //       setCampaign(data)
    //       console.log(campaign)
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   }
    //   createCampaign(campaignID)

    // useEffect(() => {
    //     //
    //   }, []);

        return (
            <div>
                <h1>Create Your Cause</h1>
                <div>
                    <form>
                        <div>
                            <label> Cause Name </label>
                            <input
                                type="text"
                                name="name"
                                // onChange={this.handleChange}
                            />
                            <label>Description</label>
                            <input
                                type="text"
                                name="name"
                                // onChange={this.handleChange}
                            />
                            <label>Cause Category</label>
                            <select name="category" id="category">
                                <option value="select">Select</option>
                                <option value="Arts">Arts</option>
                                <option value="Community">Community</option>
                                <option value="Education">Education</option>
                                <option value="Emergency">Emergency</option>
                                <option value="Innovation">Innovation</option>
                                <option value="Family">Family</option>
                                <option value="Medical">Medical</option>
                                <option value="Housing">Housing</option>
                                <option value="Hunger">Hunger</option>
                            </select>
                            <label>More</label>
                            <input
                                type="text"
                                name="name"
                                // onChange={this.handleChange}
                            />
                        </div>
                        <img src="https://via.placeholder.com/150" />
                        <input
                            type="file"
                            name="name"
                            // onChange={this.handleChange}
                            placeholder="upload campaign image"
                        />
                        <input
                            type="text"
                            name="name"
                            // onChange={this.handleChange}
                            placeholder="connect your wallet"
                        />
                    </form>
                    <button type="submit">Create Cause</button>
                </div>

                <div>
                    <h4>
                        Not sure where to start? Take a look at some <a href="http://localhost:8080/campaigns">examples</a> here!
                    </h4>
                </div>
            </div>

        )
    }

