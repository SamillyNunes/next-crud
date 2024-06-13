interface AddButtonProps{
    children: any;
    color?: 'green' | 'blue' | 'gray';
    classnName?: string;
}

export default function AddButton(props: AddButtonProps){

    const color = props.color ?? 'gray';

    return (
        <button
            className={`
                bg-gradient-to-r from-${color}-400 to-${color}-700
                text-white
                px-4 py-2 rounded-md 
                ${props.classnName}     
            `}
        >
            {props.children}
        </button>
    );
}