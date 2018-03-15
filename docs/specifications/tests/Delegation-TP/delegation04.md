## DELEGATION04: Name server is authoritative

### Test case identifier

**DELEGATION04:** Name server is authoritative

### Objective

Subsection 6.1 of [RFC 2181](https://tools.ietf.org/html/rfc2181) specifies
that the nameservers must answer authoritatively for the domain. Answers
to queries to the name servers for the designated zone must have the "AA"
bit set.

### Inputs

The domain name to be tested.

### Ordered description of steps to be taken to execute the test case

1. Obtain the complete set of name server address records from the parent using
   [Method4](../Methods.md) and the child using [Method5](../Methods.md).
2. All the uniquely obtained address records are queried for the SOA record 
   over TCP and UDP on port 53.
3. For each query in step 2, check whether DNS answer (bogus response are not
   checked here) is obtained. If any of the query fails to respond with an
   answer, then do not proceed to step 4 for that query. Exit from the test
   without any exceptions.
4. If any name server fail to give an authoritative answer ("AA-bit" is set
   in the answer), the test fails.
5. If all the name servers answer with the AA-bit set, then the test succeeds.


### Outcome(s)

The outcome of this test case is the severity of the most severe log
message emitted during its execution.

| Log message identifier              | Description    |
|:------------------------------------|:---------------|
| DELEGATION:DEL_IS_NOT_AUTHORITATIVE | Some response had the AA bit unset. |
| DELEGATION:DEL_NO_RESPONSE_NS_QUERY | Some query was not responded to. |
| DELEGATION:DEL_UNEXPECTED_RCODE     | Some response had an RCODE not being NOERROR. |
| DELEGATION:DEL_UNEXPECTED_ANSWER    | Some response did not have a SOA record with the domain name under test as owner name in the answer section. |
| ...                                 | |


### Special procedural requirements

If either IPv4 or IPv6 transport is disabled, ignore the evaluation of the
result of any test using this transport protocol. Log a message reporting
on the ignored result.

### Intercase dependencies

None

-------

Copyright (c) 2013, 2014, 2015, IIS (The Internet Infrastructure Foundation)  
Copyright (c) 2013, 2014, 2015, AFNIC  
Creative Commons Attribution 4.0 International License

You should have received a copy of the license along with this
work.  If not, see <https://creativecommons.org/licenses/by/4.0/>.
