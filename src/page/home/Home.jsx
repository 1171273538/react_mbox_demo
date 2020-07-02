import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'
import 'bootstrap/dist/css/bootstrap.css'



@inject('store') @observer
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    handlerTodos = (type) => {
        let { store } = this.props
        switch (type) {
            case 'add':
                store.addTodo('添加新的一条记录')
                break
            case 'del':
                store.deleteTodo()
                break
            case 'reset':
                store.resetTodo()
                break
            default:
        }
    }

    render() {
        const { store } = this.props
        return (
            <>
                <div className="jumbotron" style={{textAlign:'center'}}>
                    <h1>{store.time}</h1>
                </div>
                <div className="panel panel-default">
                    <div className="panel-body">
                        <span className="label label-default">{store.desc}</span>
                        <div className="btn-group btn-group-justified" role="group" aria-label="...">
                            <div className="btn-group" role="group">
                                <button type="button" className="btn btn-primary" onClick={() => this.handlerTodos('add') }>添加</button>
                            </div>
                            <div className="btn-group" role="group">
                                <button type="button" className="btn btn-warning" onClick={() => this.handlerTodos('del')}>删除</button>
                            </div>
                            <div className="btn-group" role="group">
                                <button type="button" className="btn btn-danger" onClick={() => this.handlerTodos('reset')}>重置</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-body">
                        <ul className="list-group">
                            {store.todos.map((item, index) => (<li className="list-group-item" key={index}>{item}</li>))}
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}

export default Home