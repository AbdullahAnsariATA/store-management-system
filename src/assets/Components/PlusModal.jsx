import {useState} from "react";

const PlusModal = ({uniqueId, updateItems}) => {
    const [plus, setPlus] = useState(1)

    const IncreaseValue = () => {
        const jsonData = localStorage.getItem('items');
        const parsedItems = JSON.parse(jsonData);
        parsedItems.forEach((element, index) => { // console.log(uniqueId)
            if (uniqueId === (index + 1)) {
                // console.log(element.quantity)
                element.quantity = element.quantity + plus;
            }
        });
        localStorage.setItem('items', JSON.stringify(parsedItems));
        updateItems(parsedItems)
    }

    return (
        <div className="modal fade" id="plusModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="plusModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="plusModalLabel">Increase Quantity</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="form-floating">
                            <input type="number" className="form-control" id="floatingMinus" placeholder=""
                                value={plus}
                                onChange={
                                    (e => setPlus(e.target.value))
                                }/>
                            <label htmlFor="floatingMinus">Plus</label>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary mx-auto" data-bs-dismiss="modal"
                            onClick={IncreaseValue}>Enter</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlusModal;
