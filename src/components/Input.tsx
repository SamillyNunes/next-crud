interface InputProps{
    label: string;
    type?: 'text' | 'number';
    value: any;
    readonly?: boolean;
    onChange?: (value: any) => void;
    className?: string;
}

export default function Input(props: InputProps){
    return (
        <div className={`flex flex-col ${props.className}`}> 
            <label className="mb-2">
                {props.label}
            </label>
            <input 
                type={props.type ?? 'text'} 
                value={props.value}
                readOnly={props.readonly}
                onChange={e => props.onChange?.(e.target.value)}
                className={`
                    border border-purple-500 rounded-lg   
                    focus:outline-none ${props.readonly ? '' : 'focus:bg-white'}
                    bg-gray-200
                    px-4 py-2
                `}
            />
        </div>
    );
}