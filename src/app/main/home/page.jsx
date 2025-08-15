"use client"

import axiosInstance from "@/lib/axios";
import { useRef, useState } from "react";
import { useSidebarStore } from "@/store/sidebarStore";
// axiosInstance



function homePage() {
    const { isOpen } = useSidebarStore();

    const [rupiahMask, setRupiahMask] = useState(false);
    const [balance, setBalance] = useState(20000000);
    const [datas, setDatas] = useState({
        send: {
            details: "",
            costs: 0
        },
        recieve: {
            details: "",
            costs: 0
        }
    });
    const [selectedType, setSelectedType] = useState('send');

    const transactionNameRef = useRef(null);
    const transactionTypeRef = useRef(null);
    const transactionCostRef = useRef(null);
    const transactionDetailRef = useRef(null)

    function handleEyeClick() {
        setRupiahMask(prev => !prev)
    }

    function handleChangeType() {
        const transactionType = transactionTypeRef.current.value;
        setSelectedType(transactionType)
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
        const transactionDetails = transactionDetailRef.current.value;
        // const transactionName = transactionNameRef.current.value;
        const transactionType = transactionTypeRef.current.value;
        const transactionCost = transactionCostRef.current.value;

        // const data = {
        //     [transactionName]: {
        //         details: transactionDetails,
        //         type: transactionType,
        //         cost: transactionCost
        //     }
        // }
        // let newData = {};

        setDatas((prev) => {
            const newData = {
                ...prev,
                [selectedType]: {
                    ...prev[selectedType],
                    details: transactionDetails,
                    costs: transactionCost
                }
            }
            return newData;
        })
        // panggil API setelah state ter-update

        const newData = {
            ...datas,
            [selectedType]: {
                details: transactionDetails,
                costs: transactionCost
            }
        };
        sendData(newData);

    }

    return (
        <div className={`absolute pb-5 transition-all px-5 duration-700 top-16 mt-4 ${isOpen ? "!left-56 w-[calc(100vw-14rem)]" : "!left-16 w-[calc(100vw-4rem)]"}`}>
            <div className="grid col-span-1 md:grid-cols-3 gap-3 mb-2 h-full">
                <div className="col-span-2">
                    <div className="w-full rounded-md p-4 h-72 bg-accent">
                        <p>halo</p>
                    </div>
                </div>
                <div className="col-span-2 md:col-span-1">
                    <div className="w-full rounded-md p-4 h-72 bg-accent">
                        <p>halo</p>
                    </div>
                </div>
            </div>
            <div className="grid col-span-1 md:grid-cols-3 gap-3 h-full">
                <div className="col-span-2">
                    <div className="w-full rounded-md p-4 h-72 bg-accent">
                        <p>halo</p>
                    </div>
                </div>
                <div className="col-span-2 md:col-span-1">
                    <div className="w-full rounded-md p-4 h-72 bg-accent">
                        <p>halo</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default homePage;