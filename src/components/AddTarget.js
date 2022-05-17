import { useState } from 'react'

const AddTarget = ( { onAdd } ) => {
    const [target, setTarget] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();

        if (!target){
            alert ('Please input something');
            return;
        }

        else if (!Number.isInteger(parseInt(target))){
            alert ('Please input a number');
            return;
        }

        onAdd({target})

        setTarget('')
    }

    return (
        <form onSubmit ={onSubmit}>
            <div>
                <label><h2>Target</h2></label>
                <input type = 'text' placeholder = 'Add Target' value = {target} onChange={(e) => setTarget(e.target.value)}/>
                <input type = 'submit' value = 'Save Target'/>
            </div>
        </form>
    )
}

export default AddTarget