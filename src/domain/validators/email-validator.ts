function validLocalEmailPart(local: string): boolean {
    /**
     * Validates the local part in an email.
     * Local part is anything before the @ sign.
     * For example, local part of email@example.com would be email.
     * 
     * @param {string} email - The email address to validate.
     * @returns {boolean} True if the local part is valid, false if local part is invalid.
    */
    const noDotAtEnd = !local.endsWith(".");
    return noDotAtEnd;
}

function validDomainName(domainName: string) : boolean {
    /**
     * Validates the domain name in an email domain.
     * Domain name is anything after the @ 
     * but before the last dot in the email address.
     * For example, domain name of email@example.com would be example
     * or domain name of email@example.ex.com would be example.ex.
     * 
    */
    const noHypenAtEnd = !domainName.endsWith("-");
    return noHypenAtEnd;
}

function validTLD(TLD: string) : boolean {
    /**
     * Validates if the TLD such as .is, .com, .org etc.
     * is valid.
     * 
     * A valid TLD should only be a string. 
     * No numbers or special characters.
     * 
     */
    const onlyString = [...TLD].every(letter => Number.isNaN(Number(letter)));
    return onlyString;
}

function validDomainEmailPart(domain: string): boolean {
    /**
     * Validates the domain part in an email.
     * Domain part is anything after the @ sign.
     * For example, domain part of an email@example.com would be example.com.
     * 
     * @param {string} domain - The email domain to validate such as example.com
     * @returns {boolean} - True if email domain is valid, false if email domain is invalid.
    */
    
    const domainParts = domain.split(".");
    const domainName = domainParts[0];
    const hasleastTwoParts = domainParts.length >= 2;

    //domain cant ever be undefined as this is a private helper.
    //validEmail is already tested for undefined. 

    const TLD = domainParts.at(-1)!;
    const noDotAtBeginning = !domain.startsWith(".");

    return validDomainName(domainName)
            && validTLD(TLD)
            && hasleastTwoParts
            && noDotAtBeginning;
}

function validEmail(email: string) : boolean {
    
   if(!email) return false;

    //Universal rules for all the email string.
    const oneAt = email.split("@").length === 2;
    const noBeginAt = !email.startsWith("@") ;
    const noSpace = !email.includes(" ")
    const noComma = !email.includes(",");
    const noDotAtBeginning = !email.startsWith(".");
    const noconsecutiveDots = !email.includes("..");
    const doesNotEndInDot = !email.endsWith(".")
    
    const [local, domain] = email.split("@");
    return oneAt 
            && noBeginAt 
            && noSpace 
            && noComma 
            && noDotAtBeginning
            && noconsecutiveDots
             && doesNotEndInDot
            && validLocalEmailPart(local) && validDomainEmailPart(domain)
}

export {validEmail}