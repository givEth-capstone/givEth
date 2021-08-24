import React, { useEffect, useState } from 'react';

export default class CreateCampaign extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Create Your Cause</h1>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label> Cause Name </label>
                            <input
                                type="text"
                                name="name"
                                onChange={this.handleChange}
                            />

                            <label>Description</label>
                            <input
                                type="text"
                                name="name"
                                onChange={this.handleChange}
                            />
                            <label>Cause Category</label>
                            <input
                                type="text"
                                name="name"
                                onChange={this.handleChange}
                            />
                            <label>More</label>
                            <input
                                type="text"
                                name="name"
                                onChange={this.handleChange}
                            />
                        </div>
                        <img src="https://via.placeholder.com/150" />
                        <input
                            type="file"
                            name="name"
                            onChange={this.handleChange}
                            placeholder="upload campaign image"
                        />
                        <input
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                            placeholder="connect your wallet"
                        />
                    </form>
                    <button type="submit">Create Cause</button>
                </div>

                <div>
                    <h4>
                        Not sure where to start? Take a look at some examples here!
                    </h4>
                </div>
            </div>

        )
    }
}


