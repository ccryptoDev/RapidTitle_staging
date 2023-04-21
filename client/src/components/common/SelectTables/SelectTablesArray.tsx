import React from "react";
import InputTextField from "./InputTextField";

function SelectTablesArray() {
    return (
        <div>
            <div className="grid grid-cols-4 gaps-4">
                <div>
                    <InputTextField
                        label=''
                        defaultValue=''
                        id="reddit-input"
                        variant="filled"
                        style={{ marginTop: 11 }}
                    />
                </div>
            </div>
        </div>
    )
}

export default SelectTablesArray;