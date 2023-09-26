module LeapYear (isLeapYear) where

isLeapYear :: Integer -> Bool
isLeapYear year
    | divisibleBy 100 = divisibleBy 400
    | otherwise = divisibleBy 4
    where 
        divisibleBy x = mod year x == 0
