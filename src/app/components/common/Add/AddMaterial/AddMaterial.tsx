import React from "react";
import './AddMaterial.css';
import {Btn} from "@/components/common/Btn";

export const AddMaterial = () => {
    return (
        <div className="Add_material">
            <div className="Add_material_container">
                <h3>Dodaj nowy materiał</h3>
                {/*<a href="/materials">zobacz stan mazynowy <img src="/icons/arrow_right.png" alt=""/></a>*/}
                <form>
                    <label>
                        Nazwa
                        <input
                            type="text"
                            name="name-material"
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                            className="Name_material"
                            placeholder="Nazwa materiału"
                        />
                    </label>
                    <label>
                        Ilość
                        <input
                            type="number"
                            name="amount-material"
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                            className="Amount_material"
                            placeholder="0"
                        />
                    </label>
                    <label>
                        Komentarz
                        <textarea
                            name="comment"
                            cols="30"
                            rows="4"
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                            className="Comment"
                            placeholder="Twój komentarz">
                                    </textarea>
                    </label>
                    <Btn text="Zapisz"/>
                </form>
            </div>
        </div>
    )
}