import { Redirect, Route, Switch } from "react-router-dom";

const renderRoutes = (routes, role, extraProps = {}, switchProps = {}) =>
    routes ? (
        <Switch {...switchProps}>
            {routes.map((route, i) => (
                <Route
                    key={route.key || i}
                    path={route.path}
                    exact={route.exact}
                    strict={route.strict}
                    render={(props) => {
                        if (route.role && !route.role.includes(role)) {
                            return <div>你没有这个页面的权限</div>;
                        }
                        return (
                            <route.component
                                {...props}
                                {...extraProps}
                                route={route}
                            />
                        );
                    }}
                />
            ))}
            <Redirect to="/a" path="/" />
        </Switch>
    ) : null;

export { renderRoutes };
