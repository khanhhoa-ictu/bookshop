import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { sortTypes } from '../../constants/action.types'
import _ from 'lodash'
class HeaderBottom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            titleSort: 'Sort',
            listActionSort: []
        }
    }
    componentWillMount() {
        const { sortType } = this.props
        if (sortType === sortTypes.SORT_DAY_DECREASED) {
            this.setState({ titleSort: 'Sort by day decrease' })
        } else if (sortType === sortTypes.SORT_DAY_INCREASED) {
            this.setState({ titleSort: 'Sort by day increase' })
        } else if (sortType === sortTypes.SORT_PRICE_DECREASED) {
            this.setState({ titleSort: 'Sort by price decrease' })
        } else if (sortType === sortTypes.SORT_PRICE_INCREASED) {
            this.setState({ titleSort: 'Sort by price increase' })
        } else if (sortType === sortTypes.SORT_SALES_DECREASED) {
            this.setState({ titleSort: 'Sort by sales decrease' })
        } else if (sortType === sortTypes.SORT_SALES_INCREASED) {
            this.setState({ titleSort: 'Sort by sales increase' })
        } else if (sortType === sortTypes.SORT_VIEWS_DECREASED) {
            this.setState({ titleSort: 'Sort by views decrease' })
        } else if (sortType === sortTypes.SORT_VIEWS_INCREASED) {
            this.setState({ titleSort: 'Sort By views increase' })
        }
        this.setState({
            listActionSort: {
                SORT_DAY_DECREASED: 'Sort by day decrease',
                SORT_DAY_INCREASED: 'Sort by day increase',
                SORT_PRICE_DECREASED: 'Sort by price decrease',
                SORT_PRICE_INCREASED: 'Sort by price increase',
                SORT_SALES_DECREASED: 'Sort by sales decrease',
                SORT_SALES_INCREASED: 'Sort by sales increase',
                SORT_VIEWS_DECREASED: 'Sort by views decrease',
                SORT_VIEWS_INCREASED: 'Sort By views increase',
            }
        })
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.sortType != this.props.sortType && nextProps.sortType !== undefined) {
            this.setState({ titleSort: this.state.listActionSort[nextProps.sortType] })
        }

    }
    handeSearch = (e) => {
        if(e === 13) {
            this.props.searchTextSubmit()
        }
    }
    render() {
        return (
            <div className="header-bottom">
                <div className="container">
                    <div className="row header-bot">
                        <div className="col-sm-8">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>
                           
                        </div>
                        <div className="col-sm-4">
                            <div className="search_box pull-right">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    onChange={(e) => this.props.setSearchText(e.target.value)}
                                    onKeyUp={(e) => this.handeSearch(e.keyCode)}
                                />
                            </div>
                        </div>
                       

                    </div>
                </div>
            </div>
        )
    }
}
export default HeaderBottom