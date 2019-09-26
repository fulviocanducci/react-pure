import Home from "./components/Home";
import Counter from "./components/Counter";


const routers = [{
    linkTo: '/',
    component: Home, 
    name: 'App',
    private: true
}, 
{
    linkTo: '/counter',
    component: Counter,
    name: 'Counter',
    private: false
}]

export default routers;