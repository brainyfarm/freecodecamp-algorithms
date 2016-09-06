def palindrome(string):
    """
    Check to see if string is a palindrome
    Returns a Boolean
    """
    import re 
    # Get rid of non alphabets or non numbers characters
    cleanedString = re.sub("[\W_]", "", string).lower()
    
    # Reverse and compare
    return cleanedString[::-1] == cleanedString
   
print palindrome("My age is 0, 0 si ega ym.")