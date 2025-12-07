type ValidationErrorProps = {
    errorMessage : string
}

export function ValidationError({errorMessage} : ValidationErrorProps) {
    return (
        <div className="
            mt-3 px-3 
            py-1.5 
            rounded-md 
            border border-[#C97C7C] 
            bg-[#E8B8B8]/25 
            text-[#7A4343] 
            text-sm
            ">{errorMessage}
        </div>
    )
}