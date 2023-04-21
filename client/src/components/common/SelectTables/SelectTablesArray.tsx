import React from "react";
import InputTextField from "./InputTextField";

function SelectTablesArray() {
    return (
        <div>
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-2">
                    <InputTextField
                        label='Vehicle Number'
                        defaultValue=''
                        // id="reddit-input"
                        variant="filled"
                        style={{ marginTop: 11, width: '100%' }}
                    />
                </div>
                <div className="">
                    <InputTextField
                        label='Vehicle Type'
                        defaultValue=''
                        // id="reddit-input"
                        variant="filled"
                        style={{ marginTop: 11, width: '100%' }}
                    />
                </div>
                <div className="">
                    <InputTextField
                        label='Body Type Model'
                        defaultValue=''
                        // id="reddit-input"
                        variant="filled"
                        style={{ marginTop: 11, width: '100%' }}
                    />
                </div>
            </div>
            <div className="grid grid-cols-7 gap-4">
                <div className="col-span-2">
                    <InputTextField
                        label='Your Model'
                        defaultValue=''
                        // id="reddit-input"
                        variant="filled"
                        style={{ marginTop: 11, width: '100%' }}
                    />
                </div>
                <div className="">
                    <InputTextField
                        label='Make'
                        defaultValue=''
                        // id="reddit-input"
                        variant="filled"
                        style={{ marginTop: 11, width: '100%' }}
                    />
                </div>
                <div className="">
                    <InputTextField
                        label='Model'
                        defaultValue=''
                        // id="reddit-input"
                        variant="filled"
                        style={{ marginTop: 11, width: '100%' }}
                    />
                </div>
                <div className="col-span-2">
                    <InputTextField
                        label='Plate Number'
                        defaultValue=''
                        // id="reddit-input"
                        variant="filled"
                        style={{ marginTop: 11, width: '100%' }}
                    />
                </div>
                <div className="">
                    <InputTextField
                        label='Model'
                        defaultValue=''
                        // id="reddit-input"
                        variant="filled"
                        style={{ marginTop: 11, width: '100%' }}
                    />
                </div>
            </div>
            <div className="grid grid-cols-8 gap-4">
                <div className="">
                    <InputTextField
                        label='Class'
                        defaultValue=''
                        // id="reddit-input"
                        variant="filled"
                        style={{ marginTop: 11, width: '100%' }}
                    />
                </div>
                <div className="col-span-2">
                    <InputTextField
                        label='Trust Number'
                        defaultValue=''
                        // id="reddit-input"
                        variant="filled"
                        style={{ marginTop: 11, width: '100%' }}
                    />
                </div>
                <div className="">
                    <InputTextField
                        label='Fees Paid'
                        defaultValue=''
                        // id="reddit-input"
                        variant="filled"
                        style={{ marginTop: 11, width: '100%' }}
                    />
                </div>
                <div className="col-span-2">
                    <InputTextField
                        label='Issue Date'
                        defaultValue=''
                        // id="reddit-input"
                        variant="filled"
                        style={{ marginTop: 11, width: '100%' }}
                    />
                </div>
                <div className="col-span-2">
                    <InputTextField
                        label='Expiration Date'
                        defaultValue=''
                        // id="reddit-input"
                        variant="filled"
                        style={{ marginTop: 11, width: '100%' }}
                    />
                </div>
            </div>
            <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2">
                    <InputTextField
                        label='Registered Owners'
                        defaultValue=''
                        // id="reddit-input"
                        variant="filled"
                        style={{ marginTop: 11, width: '100%' }}
                    />
                </div>
                <div className="col-span-2">
                    <InputTextField
                        label='Address'
                        defaultValue=''
                        // id="reddit-input"
                        variant="filled"
                        style={{ marginTop: 11, width: '100%' }}
                    />
                </div>
                <div className="">
                    <InputTextField
                        label='City'
                        defaultValue=''
                        // id="reddit-input"
                        variant="filled"
                        style={{ marginTop: 11, width: '100%' }}
                    />
                </div>
                <div className="">
                    <InputTextField
                        label='State'
                        defaultValue=''
                        // id="reddit-input"
                        variant="filled"
                        style={{ marginTop: 11, width: '100%' }}
                    />
                </div>
            </div>
        </div>
    )
}

export default SelectTablesArray;