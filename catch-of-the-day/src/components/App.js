import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
//import StorePicker from './StorePicker';

class App extends React.Component {
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header />
        {/*<StorePicker/>*/}
                </div>
                <Order/>
                <Inventory/>

            </div>

        )
    }
}

export default App;