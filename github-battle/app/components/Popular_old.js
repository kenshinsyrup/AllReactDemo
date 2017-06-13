var React = require("react");

class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: "All"
        };

        this.updateLanguage = this.updateLanguage.bind(this);
    }

    updateLanguage(lang) {
        this.setState(function () {
            return {
                selectedLanguage: lang
            }
        });
    }

    render() {
        var languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];
        console.log("Here we can get key word this is Popular component: ", this);

        /*onClick={this.updateLanguage(lang)}是错误的，onClick需要的是一个函数，而不是函数执行结果；
        这里如果用ES6的写法会比较好onClick={()=>{this.updateLanguage(lang)}}，一个lambda函数*/
        /*should pass this to the function(a new scope), or in the function, this will be undifined*/
        return (
            <ul className="languages">
                {languages.map(function (lang) {
                    return (
                        <li
                            style={lang === this.state.selectedLanguage ? { color: "#d0021b" } : null}
                            onClick={this.updateLanguage.bind(null, lang)}
                            key={lang}>
                            {lang}
                        </li>
                    )
                }, this)}
            </ul>
        );
    }
}

module.exports = Popular;