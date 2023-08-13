import {useState} from "react";

const MinusModal = ({uniqueId, updateItems}) => {
    const [minus, setMinus] = useState(1)

    const decreaseValue = () => {
        const jsonData = localStorage.getItem('items');
        const parsedItems = JSON.parse(jsonData);
        parsedItems.forEach((element, index) => { // console.log(uniqueId)
            if (uniqueId === (index + 1)) {
                // console.log(element.quantity)
                element.quantity = element.quantity - minus;
            }
        });
        localStorage.setItem('items', JSON.stringify(parsedItems));
        updateItems(parsedItems)
    }

    return (
        <div className="modal fade" id="minusModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="minusModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="minusModalLabel">Decrease Quantity</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="form-floating">
                            <input type="number" className="form-control" id="floatingMinus" placeholder=""
                                value={minus}
                                onChange={
                                    (e => setMinus(e.target.value))
                                }/>
                            <label htmlFor="floatingMinus">Minus</label>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary mx-auto" data-bs-dismiss="modal"
                            onClick={decreaseValue}>Enter</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MinusModal;
