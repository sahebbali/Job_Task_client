
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer'
import './faq.css'

const Faq = () => {
  return (
    <div className='container'>
    <div className='header'>
    <Navbar />
    <hr/>
        <div className='head-data'>
        <div className='title'>
            <h2>Frequently Asked Questions</h2>
        </div>

        </div>
    </div>
        <div id="accordion">
            <div className="card">
                <div className="card-header">
                <a className="btn" data-bs-toggle="collapse" href="#collapseOne">
                    <h5>What is a blockchain oracle?</h5>
                </a>
                </div>
                <div id="collapseOne" className="collapse show" data-bs-parent="#accordion">
                <div className="card-body">
                    A blockchain oracle is any system that services a smart contract by providing it with data from an off-chain source or connecting it with an off-chain system. Oracles enable connectivity between blockchains and real-world data by interfacing with external APIs and data feeds, allowing them to pull data for or push data from a smart contract.
                </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header">
                <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseTwo">
                <h5>Why do blockchains need oracles?</h5>
                </a>
                </div>
                <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
                <div className="card-body">
                    A blockchain oracle is any system that services a smart contract by providing it with data from an off-chain source or connecting it with an off-chain system. Oracles enable connectivity between blockchains and real-world data by interfacing with external APIs and data feeds, allowing them to pull data for or push data from a smart contract.
                </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header">
                <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseThree">
                <h5>What is the Chainlink Network?</h5>
                </a>
                </div>
                <div id="collapseThree" className="collapse" data-bs-parent="#accordion">
                <div className="card-body">
                Oracles enable smart contracts to interact with off-chain resources. Without oracles, smart contracts can only access data within a blockchain, severely limiting their potential applications. The majority of industry-changing real-world use cases for smart contracts require off-chain data and computation for proper execution and often an integration with existing payment rails to settle a contract. For example, a smart contract may require high-quality weather data from a reputable source like AccuWeather to trigger a transaction. It may also require the ability to pay out escrowed fiat currency through existing financial infrastructure, such as a bank checking account.
                </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                <a className="btn" data-bs-toggle="collapse" href="#collapseFour">
                    <h5>What is a blockchain or?</h5>
                </a>
                </div>
                <div id="collapseFour" className="collapse" data-bs-parent="#accordion">
                <div className="card-body">
                    by providing it with data from an off-chain source or connecting it with an off-chain system. Oracles enable connectivity between blockchains and real-world data by interfacing with external APIs and data feeds, allowing them to pull data for or push data from a smart contract.
                </div>
                </div>
            </div>
              <div className="card">
                <div className="card-header">
                <a className="btn" data-bs-toggle="collapse" href="#collapseFive">
                    <h5>How do I keep up with current protocol development?</h5>
                </a>
                </div>
                <div id="collapseFive" className="collapse" data-bs-parent="#accordion">
                <div className="card-body">
                    The Chainlink development team is continuously building the network and protocol. To keep up to date with current progress you can follow the Chainlink Github. You can find a full list of open roles on the Chainlink Labs careers page.
                </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  
  )
}

export default Faq;
