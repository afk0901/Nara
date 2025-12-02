import {validEmail} from "../email-validator.js"
import { expect, test } from 'vitest'

  test("Email cant be empty or undefined", () => {
    //No email
    expect(validEmail(undefined)).toBe(false); 
    expect(validEmail("")).toBe(false);
  })

  test("Email does not end in a dot", () => {
    //Ends in dot
    expect(validEmail("test@example.")).toBe(false);
    expect(validEmail("test@example.com.")).toBe(false);
  })

    // ONE @ -----------------------------------------------------------

    test("Email can only contains exactly one @", () => {
        //Legit email address
        expect(validEmail("a@b.com")).toBe(true);
        // no @
        expect(validEmail("ab.com")).toBe(false);
        // two @
        expect(validEmail("a@@b.com")).toBe(false);
    })

    test("Email does not begin with @", () => {
        expect(validEmail("@emailb.com")).toBe(false);
        expect(validEmail("e@mailb.com")).toBe(true);
    })

    // LOCAL PART ------------------------------------------------------
    test("local part uses allowed characters", () => {
        expect(validEmail("email@is.com")).toBe(true);
        expect(validEmail("email.freyr@is.com")).toBe(true);
        expect(validEmail("email_freyr@is.com")).toBe(true);
        expect(validEmail("email-freyr@is.com")).toBe(true);

        // space
        expect(validEmail("em ail@is.com")).toBe(false); 
        // comma
        expect(validEmail("em,ail@is.com")).toBe(false);  
  });

    test("local part dot rules", () => {
    // has a subdomain before @
    expect(validEmail("a.b@is.com")).toBe(true); 
    // dot at start
    expect(validEmail(".ab@is.com")).toBe(false); 
    // dot at end
    expect(validEmail("ab.@is.com")).toBe(false); 
    // double dots
    expect(validEmail("a..b@is.com")).toBe(false);
    // triple dots
    expect(validEmail("a...b@is.com")).toBe(false); 
  });

  // DOMAIN ----------------------------------------------------------
  test("domain has valid structure", () => {
    expect(validEmail("test@example.com")).toBe(true);
    expect(validEmail("test@ex-ample.com")).toBe(true);

    // starts with dot
    expect(validEmail("test@.example.com")).toBe(false); 
    // has a subdomain after @
    expect(validEmail("test@test.example.com")).toBe(true);
    // Not validating TLD so .example should work.
    expect(validEmail("test@test.example")).toBe(true); 
    // TLD as a domain
    expect(validEmail("test@com.com")).toBe(true); 
    // no dot before TLD and no dot at all.
    expect(validEmail("test@example")).toBe(false); 
    //No dot or @
    expect(validEmail("testexample")).toBe(false); 
    // ends with hyphen
    expect(validEmail("test@example-.com")).toBe(false);
    // has consecutive dots
    expect(validEmail("test@exa..mple.com")).toBe(false);
    expect(validEmail("test@examp...le.com")).toBe(false);
    });

  // TLD RULE --------------------------------------------------------
  test("tld is letters only", () => {
    expect(validEmail("test@example.com")).toBe(true);
    expect(validEmail("test@example.is")).toBe(true);
    expect(validEmail("test@example.test.is")).toBe(true);
    // no numbers
    expect(validEmail("test@example.c0m")).toBe(false); 
    // one letter TLD
    expect(validEmail("test@example.c")).toBe(true); 
    // no special characters
    expect(validEmail("test@example.c!@m")).toBe(false);
  });