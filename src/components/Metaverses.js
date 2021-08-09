import axios from 'axios';
import React, { Component, useState } from 'react';
import propTypes from 'prop-types';
import styled, { css } from 'styled-components';


class Metaverses extends Component {
    constructor(props) {
        super(props);
        this.state = { metaverses: [] };
    }

    componentDidMount() {

        //const url = 'https://api.github.com/repos/ContentPI/ContentPI/issues';
        //const url = 'http://localhost:4000/graphql?query=%7B%0A%20%20getMetaverses%20%7B%0A%20%20%20%20name%0A%20%20%20%20characteristics%20%7B%0A%20%20%20%20%20%20style%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A';
        
        //For complete list
        const url = 'http://localhost:4000/graphql?query=%7B%0A%20%20getMetaverses%20%7B%0A%20%20%20%20name%0A%20%20%20%20website%0A%20%20%20%20description%0A%20%20%20%20characteristics%20%7B%0A%20%20%20%20%20%20style%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A';
        
        //by Genre
        //const url = 'http://localhost:4000/graphql?query=%7B%0A%20%20getMetaverseListByGenre(genre%3A%22scifi%22)%20%7B%0A%20%20%20%20name%0A%20%20%20%20website%0A%20%20%20%20description%0A%20%20%7D%0A%7D%0A';
        
        //const url = 'http://localhost:4000/graphql?query=%7B%0A%20%20getIssues%0A%7D%0A';
        //get issue via ajax
        /**
        
        //using axios 
         axios
        .get(url)
        .then((response) => {
            this.setState({
                issues: response.data
            })
        })

        */

        //using fetch
        fetch(url)
        .then(response => response.json())
        .then(data => {
    
            console.log(data);

            //for complete list
            let metaverses = data.data.getMetaverses;

            //By Genre only
            //let metaverses = data.data.getMetaverseListByGenre;
            
            console.log(`metaverses = ${metaverses}`);
            this.setState({
                metaverses: metaverses
            })

        })
        
    }

    render() {
        console.log(this.state);
        const { metaverses } = this.state;

        const Row = styled.div`
            text-align: left;
            background: transparent;
            border-radius: 3px;
            border: 1px solid gray;
            color: black;
            margin: 2px;
            padding: 0.25em 1em;
            display: block;
            width: 100%;

            .fieldname {
                color: gray;
                font-size: 12px;
            }
            `
            //watch  that ending backtick!
        return (
            <>
                <h1>METAVERSES</h1>


 
                {
                    metaverses.map((metaverse) => (
                        <Row>
                            <p key={metaverse.name}>
                                <span class="fieldname">Name:</span> <b>{metaverse.name}</b>
                            </p>
                            <p>
                                <span class="fieldname">Website:</span> <a target="_blank" href={metaverse.website}>{metaverse.website}</a>
                            </p>
                            <p>
                                <span class="fieldname">Description:</span> {metaverse.description}
                            </p>
                        </Row>
                    ))
                }
   
               
            </>
        )

    }
    
}


export { Metaverses }