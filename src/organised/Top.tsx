import {WithChildren} from "../types/WithChildren";
import React from "react";

export type TopOrganisedProps = {
    second: React.ReactNode
} & WithChildren

const TopOrganised = ({ second, children }: TopOrganisedProps) => {
    console.log('TopOrganised render');
    return <div>
        {second}
        {children}
    </div>
}

export default TopOrganised;
