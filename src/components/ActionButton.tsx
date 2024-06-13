interface ActionButtonProps{
    icon: any;
    iconColor: string;
    onClick: () => void;
}

export default function ActionButton(props: ActionButtonProps){
    return (
        <button 
            onClick={props.onClick}
            className={`
                flex justify-center items-center
                ${props.iconColor} rounded-full p-2 m-1
                hover:bg-purple-50
        `}>
            {props.icon}
        </button>
    );
}