BEGIN
    FOR rec IN (SELECT customer_id, age, loan_interest_rate 
                FROM customers 
                WHERE age > 60) 
    LOOP
        UPDATE customers
        SET loan_interest_rate = loan_interest_rate - (loan_interest_rate * 0.01)
        WHERE customer_id = rec.customer_id;
    END LOOP;
    COMMIT;
END;
/
