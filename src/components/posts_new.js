import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderField(field) {
        return(
            <div className="form-group">
                <label htmlFor={ `${field.label}Field` }>{ field.label }</label>
                <input id={ `${field.label}Field` } className="form-control" type="text" { ...field.input }/>
            </div>
            // {...field.input} = onChange={field.input.onChange} onFocus={field.input.onFocus} ...
        );
    };

    render() {
        return(
            <div>
                <h3>New post</h3>
                <form>
                    <Field name="title" label="Title" component={ this.renderField } />
                    <Field name="categories" label="Categories" component={ this.renderField } />
                    <Field name="content" label="Content" component={ this.renderField } />
                </form>
            </div>
        );
    }
};

export default reduxForm({
    form: 'PostNewForm'
})(PostsNew);