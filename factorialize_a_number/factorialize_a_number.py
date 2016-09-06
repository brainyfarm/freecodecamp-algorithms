def factorialize(n):
    """
    Calculates and returns
    the factorial (!) of n
    """
    factorial = 1
    if(n == 0):
        return 1
    return n * factorialize(n - 1)
    
print factorialize(5)