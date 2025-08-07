"use client"

import axiosInstance from "@/lib/axios";
import { useState } from "react";
// axiosInstance



function homePage() {

    const [rupiahMask, setRupiahMask] = useState(false);
    const [balance, setBalance] = useState(20000000);
    const [datas, setDatas] = useState();

    function handleEyeClick() {
        setRupiahMask(prev => !prev)
    }

    const sendData = async (data) => {
        try {
            const response = await axiosInstance.post('/posts', data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    

    function hanldeSubmit() {
        // const data = datas;

        // sendData(data);
    }

    return (
        <>
            <link
                href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
                rel="stylesheet"
            />
            <div className="grid grid-cols-1 md:grid-cols-4 space-x-0 md:space-x-3 space-y-3">
                <div className="col-span-1 md:col-span-3">
                    <div className="w-full rounded-2xl p-4 bg-white h-72">
                        <div className="flex flex-col gap-1 h-full">
                            <div className="w-full h-2/12">
                                <p className="text-black md:text-xl text-md font-semibold">Total Balance</p>
                            </div>
                            <div className="w-full h-4/12">
                                <p style={{ fontFamily: "monospace" }} className="md:text-5xl text-xl text-black font-semibold">RP <span>{(rupiahMask) ? '***' : balance.toLocaleString('id-ID')}</span> <i className="ri-eye-line text-sm hover:cursor-pointer" onClick={handleEyeClick}></i></p>
                            </div>
                            <div className="w-full h-3/12">
                                <div className="grid gap-2 h-full space-y-0 grid-cols-2">
                                    <div className="col-span-1 w-full h-full">
                                        <div onClick={() => document.getElementById('my_modal_1').showModal()} className="p-2 bg-gray-50 flex cursor-pointer hover:bg-gray-100 rounded-md w-full h-full">
                                            <div className="w-12 h-full bg-base-100 text-center items-center justify-center flex rounded-full">
                                                <i className="ri-add-circle-line text-4xl "></i>
                                            </div>
                                            <div className="flex justify-center pl-4 items-center">
                                                <p className="text-lg">Send</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-1 w-full h-full">
                                        <div className="p-2 bg-gray-50 flex rounded-md hover:bg-gray-100 cursor-pointer w-full h-full">
                                            <div className="w-12 h-full bg-base-100 text-center items-center justify-center flex rounded-full">
                                                <i className="ri-add-circle-line text-4xl "></i>
                                            </div>
                                            <div className="flex justify-center pl-4 items-center">
                                                <p className="text-lg">Recieve</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full bg-base-300 rounded-md h-3/12">
                                <p>TBA</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="col-span-1">
                    <div className="w-full rounded-m h-72">
                        <div className="flex flex-col gap-y-4">
                            <div className="w-full rounded-2xl p-4 h-52 bg-white">
                                <div className="flex justify-between">
                                    <p>Spending</p>
                                    <select className="select w-40" name="" id="">
                                        <option value="">Month</option>
                                        <option value="">Year</option>
                                    </select>
                                </div>
                            </div>
                            <div className="w-full rounded-2xl p-4 h-16 bg-white ">
                                <div className="flex items-center h-full justify-between">
                                    <p>Tutorial</p>
                                    <button className="btn">Tutorial</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="col-span-1">
                    <div className="w-full rounded-2xl p-4 bg-white h-72">
                        <div className="flex justify-between">
                            <p>Transactions</p>
                            <a href="">See All</a>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="table">
                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="rounded-full h-12 w-12 border-2 flex">
                                                        <i className="ri-shopping-basket-line text-2xl h-full flex items-center justify-center"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            Shopping
                                            <br />
                                            <span className="badge badge-ghost badge-sm">15 Mins Ago</span>
                                        </td>
                                        <td>+ Rp 50.000.000</td>

                                    </tr>
                                    {/* row 2 */}
                                    <tr>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="rounded-full h-12 w-12 border-2 flex">
                                                        <i className="ri-money-dollar-circle-line text-2xl h-full flex items-center justify-center"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            Tax
                                            <br />
                                            <span className="badge badge-ghost badge-sm">10 Mins Ago</span>
                                        </td>
                                        <td>- Rp 50.000.000</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="rounded-full h-12 w-12 border-2 flex">
                                                        <i className="ri-money-dollar-circle-line text-2xl h-full flex items-center justify-center"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            Tax
                                            <br />
                                            <span className="badge badge-ghost badge-sm">10 Mins Ago</span>
                                        </td>
                                        <td>- Rp 50.000.000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 mt-3 md:mt-0 md:grid-cols-4 md:space-x-3 space-x-0 space-y-3">
                <div className="col-span-3">
                    <div className="w-full rounded-2xl p-4 bg-white h-72">
                        a
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="w-full rounded-2xl p-4 bg-white h-72">
                        a
                    </div>
                </div>
            </div>


            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Form</h3>
                    <div className="flex flex-col space-y-3 w-full">
                        <label htmlFor="">Transaction Name</label>
                        <input className="w-full input" type="text" />
                        <label htmlFor="">Type</label>
                        <select className="w-full select" name="" id="">
                            <option value="">Send</option>
                            <option value="">Recieve</option>
                        </select>
                        <input className="w-full input" type="text" />
                        <input className="w-full input" type="number" />
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn" onClick={hanldeSubmit}>Kirim</button>
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
}

export default homePage;