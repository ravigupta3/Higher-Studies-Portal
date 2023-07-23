<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" indent="yes" />

    <xsl:template match="/">
        <center>
            <h2>Selected programming projects</h2>
            <h3> 1992 - 2002</h3>
            <table cellpadding="10" style="border:1px solid blue">

                <tr>
                    <th style="border:1px solid black">Program</th>
                    <th style="border:1px solid black">Language</th>
                    <th style="border:1px solid black">Description</th>
                </tr>

                <xsl:for-each select="list-of-programs/application">

                    <tr>
                        <td style="border:1px solid black">
                            <xsl:value-of select="app_name" />
                        </td>
                        <td style="border:1px solid black" align="center">
                            <xsl:value-of select="language" />
                        </td>
                        <td style="border:1px solid black">
                            <xsl:value-of select="description" />
                        </td>

                    </tr>
                </xsl:for-each>

            </table>
        </center>
    </xsl:template>
</xsl:stylesheet>