import React from 'react';
import Navbar from '../components/Navbar'
import header from '../images/badge-header.svg'
import './styles/BadgeNews.css'
import Badge from '../components/Badge';


class BadgeNews extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img src={header} alt="logo" className="img-fluid" />

                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                        < Badge
                            firstName="Carlos"
                            avatarUrl="https://es.gravatar.com/avatar?d=identicon"
                            lastName="Vargas"
                            jobTitle="Frontend Engineer"
                            twitter="nc_vargas"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 

export default BadgeNews;