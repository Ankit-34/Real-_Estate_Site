import React from "react";
import Properties_Data from "../../Data/Properties_data";
import Card from "../Card/Card";

const Properties = () => {
    return (
        <>
            <section id="Properties" className="d-flex align-items-center">

                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="my-5">
                                <h1 className="text-center">Properties</h1>
                            </div>

                            <div className="container-fluid">


                                <div className="row gy-4">
                                    {
                                        Properties_Data.map((val, ind) => {
                                            return <Card
                                                key={ind}
                                                imgsrc={val.imgsrc}
                                                title={val.title}
                                            />
                                        })
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Properties;