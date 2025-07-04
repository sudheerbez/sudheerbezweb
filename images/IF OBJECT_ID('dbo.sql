IF OBJECT_ID('dbo.Sampletable', 'U') IS NOT NULL
BEGIN
    DROP TABLE dbo.sampletable;
    PRINT 'Table dbo.ntr dropped from master database.';
END
ELSE
BEGIN
    PRINT 'Table dbo.ntr does not exist in master database.';
END
GO