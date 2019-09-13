import React, { useState } from 'react'
import { Field, TextInput, Button } from '@aragon/ui';

const UserNameForm = (props) => {
    const [username, setusername] = useState("")

    function onChange(e) {
        setusername(e.target.value)
        console.log(username)
    }

    function onSubmit(e) {
        e.preventDefault()
        props.onSubmit(username)
        console.log("Submit: ", username)
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <Field label="UserName">
                    <TextInput onChange={onChange} />
                    <Button mode="strong" type="submit" >Login</Button>
                </Field>
            </form>
        </div >
    )
}

export default UserNameForm




