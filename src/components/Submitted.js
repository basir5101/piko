import React from 'react'
import search from '../assets/images/search.png'
import left from '../assets/images/left.png'
import right from '../assets/images/right.png'
import menu from '../assets/images/menu.png'
import '../style/table.scss'

export default function Submitted() {
    const tableHead = ['Order ID', 'Raised Date', 'SettleMent Mode', 'Fullfilment Mode', 'Source', 'Country', 'Status']
    const tableData = [
        {
            id: 23435235234,
            rDate: '2020-01-10',
            sMode: 'Retain',
            fulMode: 'Self-Ship',
            source: 'Amazon',
            Country: 'Chad',
            status: 1
        },
        {
            id: 23435235234,
            rDate: '2020-01-10',
            sMode: 'Retain',
            fulMode: 'Self-Ship',
            source: 'Amazon',
            Country: 'Chad',
            status: 1
        },
        {
            id: 23435235234,
            rDate: '2020-01-10',
            sMode: 'Retain',
            fulMode: 'Self-Ship',
            source: 'Amazon',
            Country: 'Chad',
            status: 1
        },
        {
            id: 23435235234,
            rDate: '2020-01-10',
            sMode: 'Retain',
            fulMode: 'Self-Ship',
            source: 'Amazon',
            Country: 'Chad',
            status: 2
        },
        {
            id: 23435235234,
            rDate: '2020-01-10',
            sMode: 'Retain',
            fulMode: 'Self-Ship',
            source: 'Amazon',
            Country: 'Chad',
            status: 2
        },
        {
            id: 23435235234,
            rDate: '2020-01-10',
            sMode: 'Retain',
            fulMode: 'Self-Ship',
            source: 'Amazon',
            Country: 'Chad',
            status: 2
        },
        {
            id: 23435235234,
            rDate: '2020-01-10',
            sMode: 'Retain',
            fulMode: 'Self-Ship',
            source: 'Amazon',
            Country: 'Chad',
            status: 3
        },
        {
            id: 23435235234,
            rDate: '2020-01-10',
            sMode: 'Retain',
            fulMode: 'Self-Ship',
            source: 'Amazon',
            Country: 'Chad',
            status: 3
        },
        {
            id: 23435235234,
            rDate: '2020-01-10',
            sMode: 'Retain',
            fulMode: 'Self-Ship',
            source: 'Amazon',
            Country: 'Chad',
            status: 4
        },
        {
            id: 23435235234,
            rDate: '2020-01-10',
            sMode: 'Retain',
            fulMode: 'Self-Ship',
            source: 'Amazon',
            Country: 'Chad',
            status: 4
        },
        {
            id: 23435235234,
            rDate: '2020-01-10',
            sMode: 'Retain',
            fulMode: 'Self-Ship',
            source: 'Amazon',
            Country: 'Chad',
            status: 5
        },
        {
            id: 23435235234,
            rDate: '2020-01-10',
            sMode: 'Retain',
            fulMode: 'Self-Ship',
            source: 'Amazon',
            Country: 'Chad',
            status: 5
        },

    ]
    return (
        <section className='w-full'>
            <div className="d-flex">
                <div style={{ background: '#002449' }} className=" px-2">
                    <img className='mt-5 py-4' src={menu} alt="" />
                </div>
                <div className='w-100'>
                    <div className='bg-white'>
                        <div className="d-flex py-2 bg-white container m-auto align-item-center justify-content-between">
                            <h4 className='bg-white'>Return Process</h4>
                            <button className='btn btn-primary text-white'>Raised Request</button>
                        </div>
                    </div>
                    <div className="container my-3 bg-white">
                        <div className="sort-section pt-3 d-flex align-items-center justify-content-between">
                            <div className='d-flex'>
                                <div class="dropdown me-2">
                                    <button class="btn border dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Filter by Country
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>

                                </div>
                                <div class="dropdown me-2">
                                    <button class="btn border dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Filter by Source
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>

                                </div>
                            </div>
                            <div className='table_search'>
                                <input type="text" placeholder='Search by Order Id, name' className="form-control" />
                                <img src={search} alt="" />
                            </div>
                        </div>
                        <hr />
                        <div class="table-responsive">
                            <table class="table table-borderless">
                                <thead>
                                    <tr>

                                        {
                                            tableHead.map((data, index) => <th scope="col"> {data} </th>)
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        tableData.map((data, index) => (
                                            <tr key={index}>
                                                <th scope="row"> {data.id} </th>
                                                <td>{data.rDate}</td>
                                                <td>{data.sMode}</td>
                                                <td>@{data.fulMode}</td>
                                                <td>{data.source}</td>
                                                <td>{data.Country}</td>
                                                <td>
                                                    <button className={`${data.status === 1 ? 'btn text-secondary border' : data.status === 2 ? 'btn border text-warning' : data.status === 3 ? 'btn border text-info' : data.status === 4 ? 'btn text-danger border' : 'btn text-warning border'}`}>
                                                        {data.status === 1 ? 'Open' : data.status === 2 ? 'Pending' : data.status === 3 ? 'Open' : 'Resolved Closed'}
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>

                    </div>
                    <nav className="mx-5" aria-label="...">
                        <ul class="pagination">
                            <li class="page-item">
                                <span class="page-link"> <img src={left} alt="" /> </span>
                            </li>
                            <li class="page-item active"><a class="page-link" href="#">1</a></li>
                            <li class="page-item">
                                <span class="page-link">
                                    2
                                </span>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">...</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#"> <img src={right} alt="" /> </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    )
}
