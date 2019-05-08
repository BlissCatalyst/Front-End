import React from 'react';
import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom'

import Login from '../LoginForm/OAuthGoogle.js'
const LandingPage = (props) => {
	return (
		<LandingPageContainer>
			<Header>
				<div>
					<h1>MoodiBeats</h1>
					<h2>Find copyright free music by mood.</h2>
				</div>
				<Login style = {{
					position: 'absolute',
					top: '5px', 
					right: '5px'
				}}/>
			</Header>
			<FeaturesContainer>
				<Feature left>
					<div className = 'feature-details'>
						<h2>Browse Free Curated Songs</h2>
						<p>
							over 60 curated songs guaranteed free to use on your stream or videos.
						</p>
					</div>
					<div className = 'feature-img'>
						<img src = 'https://images.unsplash.com/photo-1516223725307-6f76b9ec8742?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80' alt = 'video creator'/>
					</div>
				</Feature>
				<Feature right>
					<div className = 'feature-img'>
						<img src = 'https://images.unsplash.com/photo-1537884444401-d79ef2b2990d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80' alt = 'Painting'/>
					</div>
					<div className = 'feature-details'>
						<h2>Search songs by mood</h2>
						<p>
							Choose just the right music for the theme of your content.
						</p>
					</div>
				</Feature>
                <Feature left>
                    <div className = 'feature-details'>
						<h2>Create Playlists</h2>
						<p>
                            Group your favorite songs together. Dunno lol
						</p>
					</div>
					<div className = 'feature-img'>
						<img src = 'https://images.unsplash.com/photo-1511233002817-99325d7cc2d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' alt = 'Painting'/>
					</div>
				</Feature>
			</FeaturesContainer>
			<Team>
                <div>
                    <h2>Team</h2>
                    <ul>
                        <li>
                            <a href = 'github.com'>Kevin Brack</a>
                        </li>
                        <li>
                            <a href = 'github.com'>Logan Hufstetler</a> 
                        </li>
                        <li>
                            <a href = 'github.com'>Davina Taylor</a>
                        </li>
                        <li>
                            <a href = 'github.com'>John Humphreys</a>
                        </li>
                        <li>
                            <a href = 'github.com'>Md Kawsar Hussen</a>
                        </li>
                        <li>
                            <a href = 'github.com'>Jonathan Bernal</a>
                        </li>
                        <li>
                            <a href = 'github.com'>Sammy Lee</a>
                        </li>
                        <li>
                            <a href = 'github.com'>Xander Jake de los Santos</a>
                        </li>
                    </ul>
                </div>
			</Team>
            <Footer>
                <div id = 'legal-stuff'>
                    <h3>Legal Stuff</h3>
                    <Link to = '/'> legal stuff 1</Link>
                    <Link to = '/home'> legal stuff 2</Link>
                </div>
                <div>
                    <a href = 'patreon.com'>Patreon Button</a>
                </div>
            </Footer>
		</LandingPageContainer>
	)
}

export default LandingPage;

const LandingPageContainer = styled.div`
	color: ivory;
	*{
		margin: 0;
	}
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 0 10px;

	@media (max-width: 500px) {
		flex-direction: column;
	}
`;

const FeaturesContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const Feature = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin: 0 10px;

	font-size: 1.5em;

	div{
		width: 50vw;
	}

	.feature-details{
		position: relative;
		z-index: 5;


		${props => props.left && css`
			left: 20%;
			text-align: left;
		`}
		${props => props.right && css`
			right: 20%;
			text-align: right;
		`}

		h1, p{
			text-shadow: 0px 0px 13px rgba(0, 0, 0, 0.76)
		}
	}
	
	.feature-img{
		display: flex;
		justify-content: center;
		align-items: center;

		height: auto;
		max-height: 50vw;
		overflow: hidden;
		position: relative;
		
	}
	.feature-img img{
		height: 100%;
	}

	@media (max-width: 500px) {
		margin-top: 10px;
		
		font-size: 1em;
		.feature-details{
			position: unset;
			z-index: 5;
		}

		.feature-img img{
			height: 100%;
			transform: scale(.3);
		}
	}
`;

const Team = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 10px;
    min-height: 300px;
    font-size: 1.5em;
    ul{
        display: flex;
        justify-content: start;
        flex-wrap: wrap;
        list-style: none;
        margin: 5px auto;
        padding: 0;

        width: fit-content;
        max-width: 700px;
    }

    li{
        margin: 10px;
        width: 212px;
        text-align: left;
        align-self: flex-start;
    }

    a{
        text-decoration: none;
        text-align: center;
        color: inherit;
        text-decoration: underline;
        :hover{
            color: orange;
            cursor: pointer;
        }
    }

    
    @media (max-width: 830px) {
        ul{
            align-items: center;
            justify-content: space-evenly;
            width: 450px;
        }
        li{
            align-self: unset;
            width: 190px;
        }
	}

    @media (max-width: 500px) {
        font-size: 1em;
	    ul{
            width: 300px;
        }
        li{
            width: 126px;
        }
	}
`;

const Footer = styled.footer`
    height: 150px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
    #legal-stuff{
        display: flex;
        flex-direction: column;
    }
`;
