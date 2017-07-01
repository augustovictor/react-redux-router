import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderField(field) {
        const { meta: { touched, invalid, error } } = field; // instead of field.meta.touched
        const className = `form-group ${(touched && invalid) ? 'has-danger' : ''}`
        return(
            <div className={ className }>
                <label htmlFor={ `${field.label}Field` }>{ field.label }</label>
                <input
                    id={ `${field.label}Field` }
                    className="form-control"
                    type="text"
                    { ...field.input }
                />
                { touched ? error : true }
            </div>
            // field.meta.pristine = never touched
            // field.meta.touched = blur
            // field.meta.invalid = not valid
            // {...field.input} = onChange={field.input.onChange} onFocus={field.input.onFocus} ...
        );
    };

    onSubmit(values) {
        console.log(values);
    };

    render() {
        const { handleSubmit } = this.props; // Prop passed to the component on behalf of redux-form
        return(
            <div>
                <h3>New post</h3>
                <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
                    <Field name="title" label="Title" component={ this.renderField } />
                    <Field name="categories" label="Categories" component={ this.renderField } />
                    <Field name="content" label="Content" component={ this.renderField } />
                    <button type="submit" className="btn btn-primary">Post</button>
                </form>
            </div>
        );
    }
};

function validate(values) {
    const errors = {};

    if(!values.title || values.title.length < 5) 
        errors.title = 'Title is required and must have at least 5 characters';
    
    if(!values.categories)
        errors.categories = 'At least one category is required';

    if(!values.content)
        errors.content = 'You cannot submit a blank post';
    return errors;
};

export default reduxForm({
    form: 'PostNewForm',
    validate
})(PostsNew);