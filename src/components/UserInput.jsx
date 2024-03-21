
export default function UserInput(userInput, onChange) {

    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input type="number" 
                value={userInput.initialInvestment}
                onChange={(e) => onChange("initialInvestment", e.target.value)}/>
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" 
                value={userInput.annualInvestment}
                onChange={(e) => onChange("annualInvestment", e.target.value)}/>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input type="number" 
                value={userInput.expectedReturn}
                onChange={(e) => onChange("expectedReturn", e.target.value)}/>
            </p>
            <p>
                <label>Duration</label>
                <input type="number" 
                value={userInput.duration}
                onChange={(e) => onChange("duration", e.target.value)}/>
            </p>
        </div>
    </section>
}