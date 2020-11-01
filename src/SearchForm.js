import React from 'react'
import {Form, Col} from 'react-bootstrap'
export default function SearchForm({params, onParamChange}) {
    return (
        <Form className="mb-4">
            <Form.Row className="align-items-end">
                <Form.Group as={Col}>
                    <Form.Label>Description</Form.Label>
                    <Form.Control onChange={onParamChange} value={params.description} name="description"></Form.Control>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label >Location</Form.Label>
                    <Form.Control onChange={onParamChange} value={params.location} name="description"></Form.Control>
                </Form.Group>
                <Form.Group className="ml-2" as={Col} xs="auto">
                    <Form.Check type="checkbox" className="mb-2" onChange={onParamChange} value={params.full_time} name="full_time" id="full-time" label="Only Full Time Jobs"></Form.Check>
                </Form.Group>
            </Form.Row>
        </Form>
    )
}
