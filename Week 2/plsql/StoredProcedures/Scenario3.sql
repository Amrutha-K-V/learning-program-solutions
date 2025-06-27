CREATE OR REPLACE PROCEDURE TransferFunds (
    p_source_account IN NUMBER,
    p_target_account IN NUMBER,
    p_amount IN NUMBER
) IS
    v_balance NUMBER;
BEGIN
    -- Check source account balance
    SELECT balance INTO v_balance
    FROM accounts
    WHERE account_id = p_source_account;
    
    IF v_balance < p_amount THEN
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient funds in source account.');
    END IF;
    
    -- Deduct amount from source account
    UPDATE accounts
    SET balance = balance - p_amount
    WHERE account_id = p_source_account;
    
    -- Add amount to target account
    UPDATE accounts
    SET balance = balance + p_amount
    WHERE account_id = p_target_account;
    
    COMMIT;
    
    DBMS_OUTPUT.PUT_LINE('Funds transferred successfully.');
END;
/
